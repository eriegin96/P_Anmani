import {SignInForm} from "@/components";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Đăng nhập",
};

export default function SignInPage() {
	return <SignInForm />;
}
