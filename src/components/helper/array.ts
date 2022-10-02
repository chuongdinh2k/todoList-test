// searchh list todo
export const resultSearchListByName = (value: string, list: any[]) => {
  const arrSearchValue = value.split("");
  if (value === "") {
    return list;
  }
  return list.filter((item) => arrSearchValue.every(v => item.title.split("").includes(v)));
};

// filter array
export const filteredArray = (arrayToFilter: any, filterMethods: any) => {
  return arrayToFilter.filter((item: any) => !filterMethods.includes(item.id));
}