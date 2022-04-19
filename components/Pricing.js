import Link from "next/link";
import React, { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

let totalPrice = (originalPrice, percentageDiscount) => {
	if (percentageDiscount == "" || percentageDiscount == undefined) {
		if (originalPrice == 0) {
			return <>FREE</>;
		}
		return <>${originalPrice}</>;
	}
	if (originalPrice == 0) {
		return (
			<>
				FREE
				<div className="savings">{`No discount it's already free`}</div>
			</>
		);
	}
	let totalPrice = Math.trunc(
		originalPrice - (originalPrice * percentageDiscount) / 100,
	);
	return (
		<>
			${totalPrice}
			{totalPrice > 100 ? "💎" : ""}
			<div className="savings">
				<del>${originalPrice}</del> - {percentageDiscount}% OFF
			</div>
		</>
	);
};
const FirstTier = (props) => {
	if (props.location == "home") {
		return (
			<>
				<div className="tier">
					<span className="title">Basic</span>
					<span className="price">
						{totalPrice(0, props.couponActive.percent)}
					</span>
					<span className="info">
						✅ Free courses & Tutorials
						<br />
						❌ Programming Courses
						<br />
						❌ ASAP Developers Group
						<br />
						❌ Group Coaching
						<br />
						❌ Live Events
						<br />
						❌ Career Bundles
						<br />
						❌ Make Money Online Courses
						<br />
					</span>
					<Link href=" https://codingphase.teachable.com/p/codingphase-free-membership?utm_source=codingphase.com&utm_medium=homepage&utm_campaign=pricing%20sign%20up">
						<a className="button">Sign Up</a>
					</Link>
				</div>
			</>
		);
	} else {
		if (typeof props.bundleURL != "undefined") {
			return (
				<>
					<div className="tier">
						<span className="title">Buy Career Bundle</span>
						<span className="price">
							{totalPrice(props.bundlePrice, props.couponActive.percent)}
						</span>
						<span className="info">
							✅ All Courses In This Career
							<br />
							✅ Including New Courses
							<br />
							✅ All Free Updates
							<br />
							✅ ASAP Developers Group
							<br />
							<br />
							<br />
						</span>
						<Link
							href={`${
								props.bundleURL
							}?utm_source=codingphase.com&utm_medium=homepage&utm_campaign=pricing%20sign%20up${
								props.couponActive
									? `&coupon_code=${props.couponActive.coupon}`
									: ""
							}${
								props.affiliateActive
									? `&affcode=${props.affiliateActive.affcode}`
									: ""
							}`}>
							<a className="button">Sign Up</a>
						</Link>
					</div>
				</>
			);
		} else {
			return "";
		}
	}
};

export default function Pricing (props) {
	return (
		<>
			<section id="pricing">
				<div className="container">
					<h2>PRICING</h2>
					<p>Save money by signing up to a subscription</p>
					<div className="prices">
						<FirstTier {...props} />
						<div className="tier">
							<span className="title">Gold</span>
							<span className="price">
								{totalPrice(20, props.couponActive.percent)}
							</span>
							<span className="info">
								✅ All Courses Except 💎
								<br />
								✅ Programming Courses
								<br />
								✅ ASAP Developers Group
								<br />
								❌ Group Coaching
								<br />
								❌ Live Events
								<br />
								❌ All Career Bundles
								<br />
								❌ Make Money Online Courses
								<br />
							</span>
							<Link
								href={`https://codingphase.teachable.com/p/gold-membership?utm_source=codingphase.com&utm_medium=homepage&utm_campaign=pricing%20sign%20up${
									props.couponActive
										? `&coupon_code=${props.couponActive.coupon}`
										: ""
								}${
                                    props.affiliateActive
                                        ? `&affcode=${props.affiliateActive.affcode}`
                                        : ""
                                }`}>
								<a className="button">Sign Up</a>
							</Link>
						</div>
						<div className="tier filled">
							<span className="title">Diamond</span>
							<span className="price">
								{totalPrice(375, props.couponActive.percent)}
							</span>
							<span className="info">
								✅ All Courses Plus 💎
								<br />
								✅ Programming Courses
								<br />
								✅ ASAP Developers Group
								<br />
								✅ Group Coaching
								<br />
								✅ Live Events
								<br />
								✅ All Career Bundles
								<br />
								✅ Make Money Online Courses
								<br />
							</span>
							<Link
								href={`https://codingphase.teachable.com/p/yearly-plus-membership?utm_source=codingphase.com&utm_medium=homepage&utm_campaign=pricing%20sign%20up${
									props.couponActive
										? `&coupon_code=${props.couponActive.coupon}`
										: ""
								}${
                                    props.affiliateActive
                                        ? `&affcode=${props.affiliateActive.affcode}`
                                        : ""
                                }`}>
								<a className="button">Sign Up</a>
							</Link>
						</div>
					</div>
					<p>
						Don’t want to subscribe... Just buy the <a href="#">courses</a> you
						need
					</p>
				</div>
			</section>
		</>
	);
}
