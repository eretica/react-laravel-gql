// utils
type MapToUnion<T> = T[keyof T];

type Action = {
  type: string;
  payload?: {}
}

type Actions = {
  [key: string]: (...args: any) => Action;
}

type ActionToUnion<T extends Actions> = Extract<ReturnType<MapToUnion<T>>, Action>;

interface Todo {
  name: string
}

// todo 防止腐敗層的にGQLとLocalで利用するモデルを分ける方針がよさそう？ codeGenでprefixつけれれば楽？
// interface Category {
//   id: string
//   name: string
//   description: string
// }
