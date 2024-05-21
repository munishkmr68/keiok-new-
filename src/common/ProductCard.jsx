"use client"
import React from 'react';
import ProductImg from "../assets/images/prd-img.png";
import { twMerge } from 'tailwind-merge';

const ProductCard = ({ className, singleProductData }) => {
    return (
        <div className={twMerge("flex items-center gap-4 mt-10 mb-5", className)}>
            <img
                className="w-[120px] h-[120px] border border-bg3 shadow-img rounded-full"
                src={singleProductData?.image || ProductImg}
                alt="user-img"
            />
            <div>
                <h6 className="label mb-0.5">{singleProductData?.title}</h6>
                <h6 className="label !text-red mb-0.5">3 month supply (2mL)</h6>
                <p className="text-t4 font-medium">Qty: 1</p>
            </div>
        </div>
    )
}

export default ProductCard;