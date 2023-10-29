import React from "react";
import { get } from "lodash";
import { AxiosError } from "axios";
import { mainService } from "@/services";
import validator from "./auth.validator";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { _STORAGE_KEY_, _PATH_ } from "@/configs/const";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { commonFormFn } from "../helper";

export default function useLoginForm() {
  const navigate = useNavigate();
  const form = useForm<{ email: string; password: string }>({
    defaultValues: {
      password: "",
      email: "",
    },
    resolver: yupResolver(validator.signinSchema),
  });

  const { mutate, error, data, isLoading } = useMutation<any, AxiosError, any>({
    mutationFn: mainService.mutate.signin,
    onSuccess: (data) => {
      const credentialData = get(data, "data.data");
      if (!credentialData) return navigate(_PATH_.signin.path);
      localStorage.setItem(
        _STORAGE_KEY_._CREDENTIALS_,
        JSON.stringify(get(data, "data.data")),
      );
      navigate(_PATH_.insider.path);
    },
  });
  const submit = form.handleSubmit((formData) => {
    // mutate(formData);
    navigate(_PATH_.insider.path);
  });

  const hasFillAllValue = React.useCallback(() => {
    return form.watch("email") || form.watch("password");
  }, [form]);

  return {
    service: {
      isLoading,
      error: {
        message: (error?.message || []) as string[],
        isNotVerified: (error?.message || ([] as string[])).includes(
          "E-Mail not confirmed.",
        ),
      },
      data,
    },
    submit,
    hasFillAllValue,
    ...commonFormFn(form),
  };
}
