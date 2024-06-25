import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { API_URL } from "../App";

function SelectedLocation() {
     const { userId } = useParams();
     console.log('id', userId)
    // const { userId } = '666ace29a55227a226a39578';

    useEffect(() => {
        const getUser = async () => {
          try {
            const response = await axios.get(`${API_URL}/users/${userId}`);
            console.log("here is details of user", response.data);
            // Update formData with existing source data
            // setFormData({
            //   description: response.data.description || "",
            //   amount: response.data.amount || "",
            //   category: response.data?.category?._id || "",
            //   date: response.data.date || "",
            //   payment_method: response.data.payment_method || "",
            //   expense_type: response.data.expense_type || "",
            //   notes: response.data.notes || "",
            //   tags: response.data.tags || "",
            //   source: response.data?.source?._id || ""
            // });
            // setTabValue(response.data.expense_type === "expense" ? 0 : 1);
            // setIsLoading(false)
          } catch (error) {
            console.log(
              "there was an error while fetching location to update",
              error
            );
          }
        };
        getUser();
      }, [userId]);

  return (
    <div>
      <p>dfdfdf</p>
    </div>
  )
}

export default SelectedLocation
