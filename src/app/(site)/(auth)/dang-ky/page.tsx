import {SignUpForm} from "@/components";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Đăng ký",
};

export default function SignUpPage() {
	return <SignUpForm />;
}
