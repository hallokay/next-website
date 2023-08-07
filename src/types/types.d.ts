
type Post = {
  'userId': number;
  'id': number;
  'title': string;
  'body': string;
};

type ApiPost = {
  _id: ObjectId;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
};