export function generateArrayFromNumber(
  number: number,
  startBy: number,
): number[] {
  const result = [];
  for (let i = startBy; i < startBy + number; i++) result.push(i);
  return result;
}

export function getDisplayedPages(data: {
  totalPage: number;
  pageSize: number;
  currentPage: number;
  numberOfDisplayedPages: number;
}) {
  const { numberOfDisplayedPages = 3, totalPage, currentPage } = data;
  const pageStart = 0;

  const shouldShowAll = numberOfDisplayedPages * 3 >= totalPage;
  if (shouldShowAll) return generateArrayFromNumber(totalPage, pageStart);

  const firstGroup = generateArrayFromNumber(numberOfDisplayedPages, pageStart);
  const lastGroup = generateArrayFromNumber(
    numberOfDisplayedPages,
    totalPage - numberOfDisplayedPages,
  );

  const isInFirstGroup = firstGroup.includes(currentPage);
  const isInLastGroup = lastGroup.includes(currentPage);

  if (isInFirstGroup || isInLastGroup) {
    const isEndFirstGroup =
      currentPage === firstGroup[numberOfDisplayedPages - 1];

    const isStartLastGroup = currentPage === lastGroup[0];

    if (!isEndFirstGroup && !isStartLastGroup)
      return [...firstGroup, null, ...lastGroup];
  }

  const margin = Math.floor(numberOfDisplayedPages / 2);
  const beforeCurrentPage =
    currentPage - margin <= pageStart ? currentPage : currentPage - margin;

  const middle = generateArrayFromNumber(
    numberOfDisplayedPages,
    beforeCurrentPage,
  );
  const result = [pageStart, null, ...middle, null, totalPage + pageStart - 1];
  if (middle[0] === pageStart + 1) {
    result.splice(1, 1);
  }
  if (middle[middle.length - 1] + 1 === totalPage + pageStart - 1) {
    result.splice(-2, 1);
  }

  return result;
}
