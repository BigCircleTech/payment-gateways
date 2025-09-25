"use server";
import Stripe from "stripe";
import products from "@/data/products.json";
import { cookies } from "next/headers";

export async function createCheckoutSession({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) {
  if (!productId || !quantity) {
    return { error: "Invalid input" };
  }

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return { error: "Product not found" };
  }

  try {
    const apiKey = process.env.STRIPE_SECRET_KEY;

    if (!apiKey) {
      throw new Error("Stripe secret key is missing!");
    }

    const stripe = new Stripe(apiKey);
    const trs_session_id = cookies().get("trs_session_id")?.value || "";
    const trs_visitor_id = cookies().get("trs_visitor_id")?.value || "";

    console.log("trs_session_id", trs_session_id);
    console.log("trs_visitor_id", trs_visitor_id);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment?status=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment?status=failed`,
      metadata: {
        trs_session_id: trs_session_id,
        trs_visitor_id: trs_visitor_id,
      },
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: product.name,
              images: [`${process.env.NEXT_PUBLIC_BASE_URL}${product.image}`],
            },
            unit_amount: (product.price - product.price * (product.discount / 100)) * 100, // Stripe requires the price in cents so we multiply by 100
          },
          quantity,
        },
      ],
    });

    // You do database operations here to save the session.id and other details
    console.log("Session created", session.id);
    return { sessionId: session.id };
  } catch (error) {
    console.log("Error creating checkout session", error);
    return { error: "Error creating checkout session" };
  }
}