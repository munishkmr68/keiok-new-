"use client";
import Image from "next/image";
import userImg from "../../assets/images/user-img.png";
import ClipartImg from "../../assets/images/clipart-img.png";
import Menu from "@/components/menu";
import withRouteHOC from "@/HOC/withRouteHOC";
import Link from "next/link";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCustomerData } from "@/services/Redux/Reducer/LoginSlice";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const Header = ({ REFFERAL_VALUES, ...props }) => {
  const dispatch = useDispatch();
  const memorizedSelector = createSelector(
    (state) => state?.LoginSlice,
    (loginData) => ({
      alluserData: loginData?.alluserData,
    })
  );
  useEffect(() => {
    dispatch(getAllCustomerData(null, props?.isUserLogin));
  }, []);

  const { alluserData } = useSelector((state) => memorizedSelector(state));
  return (
    <header className="sticky top-0 z-40  bg-white">
      <div className="mx-auto flex container items-center py-[18px] px-4">
        <Link className="flex items-center gap-1 text-sm font-medium" href="/">
          <ChevronLeftIcon className="size-3 relative top-[0.5px]" />
          Back to shop
        </Link>

        <Menu />
      </div>
      {/* <SubscriptionBar /> */}
    </header>
  );
};

export default withRouteHOC(Header);
