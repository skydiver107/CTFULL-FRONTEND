import React from "react";
import { useRouter } from "next/router";
import { useGoogleLogin } from "@react-oauth/google";

export const widthGoogleAuth = (Component: React.FC<any>) => {
  const Comp: React.FC<any> = (props: any) => {
    const { push } = useRouter();
    const googleLogin = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
        console.log("Google auth succeed", tokenResponse);
        // const userInfo = await axios.get(
        //     'https://www.googleapis.com/oauth2/v3/userinfo',
        //     { headers: { Authorization: 'Bearer <tokenResponse.access_token>' } },
        // );
        push("/home");
      },
      onError: (errorResponse) => console.log(errorResponse),
    });
    return <Component {...props} login={googleLogin} />;
  };
  Comp.displayName = "test";

  return Comp;
};
