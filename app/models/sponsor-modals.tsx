import SponsorModal from "../components/ui/sponsor-modal"

export function SponsorModal0({
	active,
	onClose,
}: {
	active: boolean
	onClose: () => void
}) {
	return (
		<>
			<SponsorModal
				active={active}
				onClose={onClose}
				heading="TITLE SpONSOR"
				subheading="NAMING RIGHTS"
				price="$100,000"
			>
				<h3 className="text-2xl font-main font-bold mb-4">
					Flagship Naming Rights
				</h3>
				<ul className="list-disc ml-6 mb-6 space-y-2">
					<li>
						<strong>EXCLUSIVE naming:</strong> “[Brand] DESIFEST
						2026” appears everywhere—web, social, ads, tickets, main
						stage, and all key physical and digital touchpoints.
					</li>
					<li>
						<strong>Event Co-Ownership:</strong> “In partnership
						with [brand]” language woven into all PR, opening and
						closing ceremonies, and event marketing.
					</li>
					<li>
						<strong>Custom Logo Lockup:</strong> All creative assets
						include a custom lockup (festival + brand theme).
					</li>
				</ul>

				<h3 className="text-2xl font-main font-bold mb-4">
					High-Touch Brand Experiences
				</h3>
				<ul className="list-disc ml-6 mb-6 space-y-2">
					<li>
						<strong>Lead Festival Announcement:</strong> Sponsor
						gets first mention in all marketing, press, and “powered
						by your brand” callouts.
					</li>
					<li>
						<strong>Signature Brand Moment:</strong> Main stage
						opening or headliner artist presented by sponsor; video
						screens branded during headline act.
					</li>
					<li>
						<strong>Limited-Time Naming of Other Assets:</strong>{" "}
						(e.g., volunteer shirts, wristbands, main gate) with
						“Presented by [Brand]” tagline.
					</li>
				</ul>

				<h3 className="text-2xl font-main font-bold mb-4">
					Massive Amplification
				</h3>
				<ul className="list-disc ml-6 mb-6 space-y-2">
					<li>
						<strong>Custom Digital Showcases:</strong> Branded
						festival countdown, behind-the-scenes series, or artist
						profiles with brand story integration.
					</li>
					<li>
						<strong>First Access to Talent:</strong> VIP
						meet-and-greet or private session for sponsor’s team
						with headliner or celebrity host/interviewers, sampling
						booths, interactive games, and exclusive
						contests—customized to your marketing goals.
					</li>
				</ul>

				<h3 className="text-2xl font-main font-bold mb-4">
					Strategic Additions (Limited to Enhance Scarcity Value)
				</h3>
				<ul className="list-disc ml-6 mb-6 space-y-2">
					<li>
						<strong>“No Competing Brands” Guarantee:</strong>{" "}
						Promise no competitive brands in their sector—even in
						lower tiers.
					</li>
					<li>
						<strong>First Right of Refusal:</strong> Give returning
						rights for the next year, heightening buy-in.
					</li>
					<li>
						<strong>Customized Impact Report:</strong> Pre-scheduled
						mid-festival check-in and robust post-festival ROI
						analytics meeting with leadership team.
					</li>
				</ul>

				<h3 className="text-2xl font-main font-bold mb-4">
					Unbeatable Support &amp; Flexibility
				</h3>
				<ul className="list-disc ml-6 space-y-2">
					<li>
						<strong>White-Glove Experience:</strong> Dedicated
						festival liaison and on-call team. Sponsor lounge for
						staff, clients, and guests.
					</li>
					<li>
						<strong>Flexible Budget Add-ons:</strong> Ability to
						co-create an additional branded moment (pop-up,
						afterparty, augmented reality experience, etc.).
					</li>
					<li>
						<strong>All Staff Touchpoint:</strong> All festival
						volunteers, crew, and artists equipped with
						sponsor-branded items.
					</li>
				</ul>
			</SponsorModal>
		</>
	)
}


export function SponsorModal1({
	active,
	onClose,
}: {
	active: boolean
	onClose: () => void
}) {
	return (
		<>
			<SponsorModal
				active={active}
				onClose={onClose}
				heading="PRESENTING sponsor"
				subheading="cO-pRESENTING"
				price="$75,000"
			>
				<p>
					<strong>Co-presenting status:</strong> Your brand alongside DESIFEST on all major marketing, digital, and festival signage.
				</p>
				<p>
					<strong>Prime activation footprint:</strong> 20’ x 20’ tent in a premium, high-traffic zone—feature product demos, competitions, or bespoke experiences.
				</p>
				<p>
					<strong>Onstage presence:</strong> Logo prominent on main stage LED walls and sponsor banners; mention during major performances.
				</p>
				<p>
					<strong>Digital engagement:</strong> Inclusion in select social media campaigns, influencer content, and priority shout-outs during festival week.
				</p>
				<p>
					<strong>PR and earned media:</strong> Featured in official press releases, interviews, and media wall coverage (in 2025, 1M+ earned impressions).
				</p>
				<p>
					<strong>VIP access:</strong> 25 VIP passes to share the festival with staff and clients.
				</p>
				<p>
					<strong>Post-campaign impact report:</strong> Full breakdown of reach, engagement, and audience metrics.
				</p>
			</SponsorModal>
		</>
	)
}

export function SponsorModal2({
    active,
    onClose,
}: {
    active: boolean
    onClose: () => void
}) {
    return (
        <>
            <SponsorModal
                active={active}
                onClose={onClose}
                heading="ONSITE ACTIVATION"
                subheading="large"
                price="$25,000"
            >
                <p className="mb-4">
                    Premium 20' x 20' tent in a guaranteed high-traffic festival zone for two full days.
                </p>

                <p className="mb-4">
                    <strong>Turnkey activation:</strong> Host sampling, product demos, interactive booths, or immersive pop-up experiences.
                </p>

                <p className="mb-4">
                    <strong>In 2025:</strong> Our Kids Zone partner logged over 1,000 family interactions and distributed 1,100+ prizes—showing the power of hands-on engagement.
                </p>

                <p className="mb-4">
                    <strong>Multi-channel exposure:</strong> Brand placement on the official website, event map, and media wall—plus livestream tie-ins for added digital reach.
                </p>

                <p>
                    <strong>Engagement reporting:</strong> Post-event summary of festival reach and direct engagement metrics.
                </p>
            </SponsorModal>
        </>
    )
}


export function SponsorModal3({
	active,
	onClose,
}: {
	active: boolean
	onClose: () => void
}) {
	return (
		<>
			<SponsorModal
				active={active}
				onClose={onClose}  
                heading="ONSITE ACTIVATION"
                subheading="small"
                price="$15,000"
            >
                <h3 className="text-2xl font-main font-bold mb-4">
                    Pop-Up, Engage, and Amplify Your Brand
                </h3>

                <p className="mb-4">
                    10' x 10' branded tent for two full days—designed for high-velocity engagement and hassle-free activation.
                </p>

                <p className="mb-4">
                    <strong>Ideal for:</strong> Product giveaways, quick contests, digital sign-ups, or interactive consumer campaigns.
                </p>

                <p className="mb-4">
                    <strong>Proven traffic:</strong> In 2025, small activations averaged hundreds of direct interactions per hour during peak periods.
                </p>

                <p className="mb-4">
                    <strong>Social shoutout:</strong> Your logo featured in official DESIFEST sponsor thank-you posts on Instagram.
                </p>

                <p>
                    Simple, impactful, cost-effective—reach festival-goers where it counts! Optional social features and add-ons available.
                </p>
            </SponsorModal>
        </>
    )
}


export function SponsorModal4({
	active,
	onClose,
}: {
	active: boolean
	onClose: () => void
}) {
	return (
		<>
			<SponsorModal
				active={active}
				onClose={onClose}
                heading="BRAND partnership"
                subheading="digital only"
                price="$10,000"
            >
                <p className="mb-4">
                    Feature your brand across DESIFEST's high-engagement digital channels—Instagram (25K+ followers), rapidly growing TikTok and YouTube presences.
                </p>

                <p className="mb-4">
                    <strong>Newsletter spotlight</strong> to over 5,000 subscribers—perfect for exclusive brand offers or festival countdown updates.
                </p>

                <p className="mb-4">
                    <strong>High-ROI, low-commitment:</strong> Launch your message to Canada's diverse urban audience without the logistics of onsite activation.
                </p>

                <p className="mb-4">
                    <strong>Data-driven results:</strong> Post-campaign analytics summary, with impressions, reach, and key audience stats.
                </p>

                <p>
                    Ideal for digital-first, lifestyle, or emerging brands. Upgrade to onsite or premium digital features anytime!
                </p>
            </SponsorModal>
        </>
    )
}


export function SponsorModal5({
	active,
	onClose,
}: {
	active: boolean
	onClose: () => void
}) {
	return (
		<>
			<SponsorModal
				active={active}
				onClose={onClose}
                heading="custom package"
                subheading="what’s your budget?"
                price="your quote"
            >
                <h3 className="text-2xl font-main font-bold mb-4">
                    Let's Build Something Iconic, Together.
                </h3>

                <p className="mb-4">
                    <strong>Tailor-made collaborations:</strong> Every aspect of your sponsorship is designed for maximum alignment with your brand's mission and marketing vision.
                </p>

                <div className="mb-4">
                    <p className="font-bold mb-2">Signature integration options:</p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Present the festival's headline act or stage.</li>
                        <li>Create a branded festival zone or exclusive lounge.</li>
                        <li>Host a private fan experience or VIP party.</li>
                    </ul>
                </div>

                <p className="mb-4">
                    <strong>Powerful content partnership:</strong> Co-create digital films, artist interviews, podcasts, influencer campaigns, or interactive social contests.
                </p>

                <p className="mb-4">
                    <strong>Year-round engagement:</strong> Integrate your brand within monthly community events, creative workshops, and digital recaps.
                </p>

                <p className="mb-4">
                    <strong>Personalized service:</strong> Your own festival concierge for end-to-end premium experience design.
                </p>

                <p>
                    <strong>Proven results:</strong> Share in our audience growth, impact storytelling, and press recognition.
                </p>
            </SponsorModal>
        </>
    )
}