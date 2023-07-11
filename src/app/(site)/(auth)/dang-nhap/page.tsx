import {Metadata} from "next";
import SignInForm from "../_components/SignInForm";

export const metadata: Metadata = {
	title: "Đăng nhập",
};

export default function SignInPage() {
	return <SignInForm />;
}
