FROM node:18

# RUN apt-get update && apt-get install -y uuid-runtime

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# COPY ./scripts/postbuild.sh ./

# RUN chmod +x ./postbuild.sh

# RUN ./scripts/postbuild.sh

CMD ["yarn", "preview", "--host"]
