const paginate = (people) => {
  const itemPerPage = 10;
  const pages = Math.ceil(people.length / itemPerPage);
  const newPeople = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage;
    return people.slice(start, start + itemPerPage);
  });

  return newPeople;
};
export default paginate;
