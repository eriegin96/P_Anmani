import {Metadata} from "next";
import SignUpForm from "../_components/SignUpForm";

export const metadata: Metadata = {
	title: "Đăng ký",
};

export default function SignUpPage() {
	return <SignUpForm />;
}
