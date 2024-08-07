import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../types/generated/types";

export default function LayoutHeader(props: any) {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickMoveToLogin = () => {
    router.push("/Login");
  };

  const onClickMoveToUserJoin = () => {
    router.push("/UserJoin");
  };

  const onClickMoveToShoppingBaskets = () => {
    router.push("/ShoppingBaskets");
  };

  const onClickMoveToFreeBoard = () => {
    router.push("/FreeBoard/list");
  };
  const onClickMoveToMarket = () => {
    router.push("/UsedMarket");
  };
  const onClickMoveToannouncement = () => {
    router.push("/announcement");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToUserJoin={onClickMoveToUserJoin}
      onClickMoveToShoppingBaskets={onClickMoveToShoppingBaskets}
      onClickMoveToFreeBoard={onClickMoveToFreeBoard}
      onClickMoveToMarket={onClickMoveToMarket}
      onClickMoveToannouncement={onClickMoveToannouncement}
      // UserInfoData={data}
    ></LayoutHeaderUI>
  );
}
