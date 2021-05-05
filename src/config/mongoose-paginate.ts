import mongoosePaginate from 'mongoose-paginate-v2';

mongoosePaginate.paginate.options = {
  limit: 10,
  page: 1,
  customLabels: {
    docs: 'data',
    totalDocs: 'total',
  },
};

export default mongoosePaginate;
