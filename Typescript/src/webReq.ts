import axios, { type AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const res: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(res.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("axios error", error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};
