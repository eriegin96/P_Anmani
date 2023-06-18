import {groq} from "next-sanity";
import {Category} from "@/types/Category";
import {Voucher} from "@/types/Voucher";
import {Property} from "@/types/Property";
import client from "./config/client";

export async function getCategories(): Promise<Category[]> {
	return client.fetch(groq`*[_type == "category"]{
    _id,
    _createdAt,
    title,
    description
  }`);
}

export async function getVouchers(): Promise<Voucher[]> {
	return client.fetch(groq`*[_type == "voucher"]{
    _id,
    _createdAt,
    name,
  }`);
}

export async function getProperties(): Promise<Property[]> {
	return client.fetch(groq`*[_type == "property"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    "category": category._ref,
    "vouchers": vouchers[]->
  }`);
}

export async function getProperty(slug: string): Promise<Property> {
	return client.fetch(
		groq`*[_type == "property" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    "category": category._ref,
    "vouchers": vouchers[]->
  }`,
		{slug}
	);
}
