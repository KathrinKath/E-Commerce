"use client";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";
import { FormEvent } from "react";
import axios from "axios";
import { makeToast } from "@/utils/helper";
import Image from "next/image";
interface IPayload {
  imgSrc: null | string;
  fileKey: null | string;
  name: string;
  category: string;
  price: string;
}

const ProductForm = () => {
  const [payLoad, setPayLoad] = useState<IPayload>({
    imgSrc: null,
    fileKey: null,
    name: "",
    category: "",
    price: ""
  });

  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    axios
      .post("/api/add_product", payLoad)
      .then((res) => {
        makeToast("Product Added Successfully");
        setPayLoad({
          imgSrc: null,
          fileKey: null,
          name: "",
          category: "",
          price: ""
        });
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Image
        className="max-h-[300px] w-auto object-contain round-md"
        src={payLoad.imgSrc ? payLoad.imgSrc : "/placeholder.jpg"}
        width={800}
        height={500}
        alt="product_image"
      />
    </form>
  );
};

export default ProductForm;
