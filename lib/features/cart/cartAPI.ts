import API from "@/lib/config";

export const fetchCart = async (userId: string, token: string) => {
  const response = await API.get(`cart/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};


export const addToCartAPI = async (
  token: string,
  item: { userId: string; cartItems: { priceId: string; count: number } }
) => {
  const response = await API.post("cart", item, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteFromCartAPI = async (token: string, id: string) => {
  const response = await API.delete(`cart/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
