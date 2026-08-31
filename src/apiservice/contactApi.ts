import axios from "axios";

export interface ContactData {
   fullName: string;
    email: string;
    subject: string;
    orderNumber: string;
    message: string;
}

export interface EmailData {
    email: string
}

export const contact = async (data: ContactData) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/contact`,
            data
        );

        return response.data;
    } catch (err: unknown) {
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
};

export const welcomeEmail = async (data: EmailData) => {
    try{
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/welcome`,
            data
        );

        return response.data
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