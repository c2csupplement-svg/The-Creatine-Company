import axios from "axios";

export const getBlog = async (
  page = 1,
  limit = 10,
  search = ""
) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/blog`,
    {
      params: {
        page,
        limit,
        search,
      },
    }
  );

  return response.data;
};

export const getBlogCategory = async () => {
    try{
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/blogCategory`,
        );

        return response.data
    }
    catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.error("Server Error:", err.response.status);
                console.error("Response:", err.response.data);
            } else if (err.request) {
                console.error("No response received from server.");
            } else {
                console.error("Request error:", err.message);
            }

            return err.response?.data;
        }

        return null;
    }
}

export const getBlogBySlug = async (slug: String) => {
    try{
        const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}`,
  );

  return response.data;
  
    }catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.error("Server Error:", err.response.status);
                console.error("Response:", err.response.data);
            } else if (err.request) {
                console.error("No response received from server.");
            } else {
                console.error("Request error:", err.message);
            }

            return err.response?.data;
        }

        return null;
    }
}