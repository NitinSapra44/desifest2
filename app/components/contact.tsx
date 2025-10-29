import { useState } from "react";
import NumberCounter from "./number-counter";

export default function Contact() {

	const formObj = {
		name: '',
		workEmail: '',
		phone: '',
		companyName: '',
		agreeToBeContacted: false
	}
	const errorObj = {
		...formObj,
		agreeToBeContacted: ''
	}

	const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

	const [formData, setFormData] = useState({...formObj})
	const [errors, setErrors] = useState({...errorObj})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(formData)
		setErrors({...errorObj})

		const tempErrors = {...errorObj}

		if (!formData.name) {
			tempErrors.name = 'Name is required'
		}
		if (!formData.workEmail) {
			tempErrors.workEmail = 'Work Email is required'
		}
		else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.workEmail)) {
			tempErrors.workEmail = 'Not a valid mailID'
		}

		if (!formData.phone) {
			tempErrors.phone = 'Phone Number is required'
		}
		else if (!/^[\+]?[0-9\s\-\(\)]+$/.test(formData.phone)) {
			tempErrors.phone = 'Invalid Phone Number'
		}
		if (!formData.agreeToBeContacted) {
			tempErrors.agreeToBeContacted = 'You must agree'
		}

		setErrors(tempErrors)

		if (Object.values(tempErrors).some(value => value !== '')) {

			console.log('errors', tempErrors)
			return
		}

		// lets call api using fetch to send mail
		// response success - {
		//     "success": true,
		//     "message": "Email sent successfully"
		// }
		const url = 'https://sponsor.desifest.ca/api/send-email.php'
		const payload = {
			to: formData.workEmail,
			name: formData.name,
		}

		try {
			setSubmitStatus('loading')
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(payload),
			})

			const data = await response.json()
			console.log('data', data)
			if (data.success) {
				setSubmitStatus('success')
				setFormData({...formObj})
				setErrors({...errorObj})
			}
			else {
				setSubmitStatus('error')
				// setFormData({...formObj})
				setErrors({...errorObj})
			}
		} catch (error) {
			console.log('error', error)
			setSubmitStatus('error')
			// setFormData({...formObj})
			setErrors({...errorObj})
		}

		console.log('no errors')
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const buttonText = () => {
		if (submitStatus === 'loading') {
			return 'Submitting'
		}
		else if (submitStatus === 'success') {
			return 'Submitted'
		}
		return 'Submit'
	}

	return (
		<>
			{/* why us */}
			<section id="why-us" className=" lg:pb-[270px]  bg-black text-white">
				<div className="lg:px-[270px] px-6 mb-12">
					<h2 className="flex lg:!text-[87px] text-4xl items-center gap-4 text-white mb-8">
						<span className="w-1.5 h-18 bg-[#FB0015]"></span>
						WHY US
					</h2>

					<p className="font-normal lg:text-2xl text-sm mb-5">
						FOR TWO DECADES, DESIFEST HAS DELIVERED MORE THAN MUSIC
						— WE’VE CREATED A TRUSTED, HIGH-ENERGY PLATFORM THAT
						CONNECTS BRANDS TO ONE OF CANADA’S MOST ENGAGED CULTURAL
						COMMUNITIES.
					</p>

					<p className="font-normal text-base lg:text-2xl">
						WE STAND APART BECAUSE:
					</p>
				</div>

				<div className="lg:px-[160px] mb-[156px]">
					<div className="lg:px-[60px] px-4 py-6 bg-[#AB1218]">
						<p className="font-normal lg:text-[28px] mb-2 lg:mb-0 text-xs text-center text-text">
							UNMATCHED LEGACY: 20 YEARS
						</p>
						<p className="font-bold lg:text-[44px] text-lg text-center uppercase leading-normal">
							Canada’s #1 South Asian music festival.
						</p>
					</div>
				</div>

				<div className="lg:px-[160px] flex justify-center flex-col items-center">
					<span className="px-4 py-1 bg-[#AB1218] uppercase font-bold lg:text-[24px] text-lg block mb-8 w-fit">
						Massive reach
					</span>

					<div className="grid lg:grid-cols-3 grid-cols-1 gap-y-12  gap-4 w-full mb-[156px] px-6">
						<div className="grid gap-1">
							<h2 className="lg:text-[84px] text-6xl mission_text text-center">
								<NumberCounter target={60} duration={1} />k+
							</h2>
							<span className="lg:text-2xl text-base font-medium uppercase text-center">
								attendees
							</span>
						</div>

						<div className="grid gap-1">
							<h2 className="lg:text-[84px] text-6xl mission_text text-center">
							<NumberCounter target={100} duration={1} />k+
							</h2>
							<span className="lg:text-2xl text-base font-medium uppercase text-center">
								dropins
							</span>
						</div>

						<div className="grid gap-1">
							<h2 className="lg:text-[84px] text-6xl mission_text text-center">
							<NumberCounter target={45} duration={1} />m+
							</h2>
							<span className="lg:text-2xl text-base font-medium uppercase text-center">
								impressions
							</span>
						</div>
					</div>

					<div className="grid gap-8">
						<p className="bg-[#AB1218] lg:px-24 px-6 py-4 text-center">
							<span className="font-bold text-lg lg:text-[28px]">
								PROVEN ENGAGEMENT –{" "}
							</span>
							<span className="font-normal lg:text-2xl text-base">
								AD CPC AS LOW AS $0.08, CPV AT $0.01, CTR UP TO
								7.8%.
							</span>
						</p>

						<p className="bg-[#AB1218] lg:px-24 px-6 py-4 text-center">
							<span className="font-bold text-lg lg:text-[28px]">
								Cultural Authority –{" "}
							</span>
							<span className="font-normal lg:text-2xl text-base">
								{" "}
								First South Asian festival in North America with
								a 100% Canadian artist lineup.
							</span>
						</p>

						<p className="bg-[#AB1218] lg:px-24 px-6 py-4 text-center">
							<span className="font-bold text-lg lg:text-[28px]">
								Year-Round Touchpoints -{" "}
							</span>
							<span className="font-normal lg:text-2xl text-base">
								{" "}
								OpenMic series, mentorship, and community events
								keep your brand in front of our audience long
								after festival weekend.
							</span>
						</p>
					</div>
				</div>
			</section>

			{/* contact us */}
			<section id="contact-us" className=" py-32 lg:pb-32  bg-black text-white">
				<div className="lg:px-[270px] px-6 mb-16">
					<h2 className="flex lg:!text-[87px] text-4xl items-center gap-4 text-white mb-8">
						<span className="w-1.5 h-18 bg-[#FB0015]"></span>
						CONTACT US
					</h2>

					<p className="font-normal lg:text-2xl text-base mb-5">
						WE’RE READY TO DESIGN A PARTNERSHIP THAT DELIVERS
						MEASURABLE RESULTS, UNFORGETTABLE BRAND MOMENTS, AND
						LASTING CULTURAL IMPACT.
					</p>

					<p className="font-normal lg:text-2xl text-base">
						WHETHER YOU WANT NATIONAL EXPOSURE, DEEP COMMUNITY
						ENGAGEMENT, OR A PREMIUM ACTIVATION, DESIFEST IS YOUR
						PLATFORM.
					</p>
				</div>

				<div className="grid gap-8 lg:px-[160px] lg:mb-[156px]">
					<p className="bg-[#AB1218] lg:px-24 px-6 py-4 text-center">
						<span className="font-bold lg:text-[28px] text-lg">
							SPONSORSHIP DEADLINE:{" "}
						</span>
						<span className="font-normal lg:text-2xl text-base">
							{" "}
							APRIL 15.2026
						</span>
					</p>

					<p className="bg-[#AB1218] lg:px-24 px-6 py-4 text-center">
						<span className="font-bold lg:text-[28px] text-lg">
							EARLY COMMITMENT BONUS:{" "}
						</span>
						<span className="font-normal lg:text-2xl text-base">
							{" "}
							FEBRUARY 15.2026TO SECURE CATEGORY EXCLUSIVITY AND
							PRIORITY PLACEMENT.
						</span>
					</p>
				</div>

				<div id="contact-form" className="pt-20 pb-20 lg:pb-[200px]">
					<div className="max-w-[1000px] mx-auto border-white contact-shadow px-6 lg:px-20 py-12">
						<h4 className="text-center uppercase mb-1">get full sponsor kit</h4>
						<p className="uppercase mb-12 text-sm lg:text-base text-center">
						One page overview of benefits, audiences, and formats
						</p>

						<div className={` h-[30vh]  ${submitStatus === 'success' ? 'flex flex-col gap-8 max-w-[500px] mx-auto justify-center items-center' : 'hidden'}`}>
							<p className="text-center text-xl text-green-500">Thank you for your interest in sponsoring DesiFest.<br/>We will get back to you soon.</p>
							<p className="text-gray-200">Please check your email for the full sponsorship kit.</p>
						</div>

						<form className={submitStatus === 'success' ? 'hidden' : ''} onSubmit={handleSubmit}>
							<div className="grid gap-6 lg:gap-10">
								<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
									<div className="grid gap-2.5 relative">
										<label htmlFor="name" className="lg:text-lg text-base" >Name <sup>*</sup> </label>
										<input type="text" name="name" className={`border rounded border-[#F5F5F5]/50 p-4 bg-[#f5f5f5]/12 h-14 ${errors.name ? 'border-[#FF0000]' : ''}`} value={formData.name} onChange={handleChange} />
										{errors.name && <p className="absolute top-full left-0 text-[#FB0015] text-sm">{errors.name}</p>}
									</div>

									<div className="grid gap-2.5 relative">
										<label htmlFor="work email" className="lg:text-lg text-base" >Work Email <sup>*</sup> </label>
										<input name="workEmail" className={`border rounded border-[#F5F5F5]/50 p-4 bg-[#f5f5f5]/12 h-14 ${errors.workEmail ? 'border-[#FF0000]' : ''}`} value={formData.workEmail} onChange={handleChange} />
										{errors.workEmail && <p className="absolute top-full left-0 text-[#FB0015] text-sm">{errors.workEmail}</p>}
									</div>
								</div>

								<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
									<div className="grid gap-2.5 relative">
										<label htmlFor="phone" className="lg:text-lg text-base" >Phone Number <sup>*</sup> </label>
										<input type="text" maxLength={16} name="phone" className={`border rounded border-[#F5F5F5]/50 p-4 bg-[#f5f5f5]/12 h-14 ${errors.phone ? 'border-[#FF0000]' : ''}`} value={formData.phone} onChange={handleChange} />
										{errors.phone && <p className="absolute top-full left-0 text-[#FB0015] text-sm">{errors.phone}</p>}
									</div>

									<div className="grid gap-2.5 relative">
										<label htmlFor="work email" className="lg:text-lg text-base" >Company Name </label>
										<input name="companyName" className={`border rounded border-[#F5F5F5]/50 p-4 bg-[#f5f5f5]/12 h-14 ${errors.companyName ? 'border-[#FF0000]' : ''}`} value={formData.companyName} onChange={handleChange} />
										{errors.companyName && <p className="absolute top-full left-0 text-[#FB0015] text-sm">{errors.companyName}</p>}
									</div>
								</div>

								<div className="relative">
									{/* checkbox */}
									<div className="flex items-center gap-2">
										<input type="checkbox" name="agreeToBeContacted" className={` rounded size-5  ${errors.agreeToBeContacted ? 'border-[#FF0000]' : ''}`} checked={formData.agreeToBeContacted} onChange={handleChange} />
										<label htmlFor="checkbox" className="text-lg font-light leading-snug" >I agree to be contacted about sponsorship opportunities</label>
									</div>
									{errors.agreeToBeContacted && <p className="absolute top-full left-0 text-[#FB0015] text-sm">{errors.agreeToBeContacted}</p>}
								</div>

								<div>
									{submitStatus === 'error' && <p className="text-[#FB0015] absolute">Something went wrong. Please try again.</p>}
								</div>

								<div className="flex justify-center">
									<button type="submit" className={`uppercase text-xl font-medium px-6 py-3 text-white ${submitStatus === 'success' || submitStatus === 'loading' ? 'bg-[#FB0015]/12 cursor-not-allowed' : 'bg-[#FB0015]'}`} disabled={submitStatus === 'loading'}>
										{buttonText()}
									</button>
								</div>

							</div>
						</form>

					</div>
				</div>

				<div className="lg:px-[270px] px-6">
					<p className="text-2xl text-center uppercase mb-4">
						Contact:
					</p>

					<div className="relative z-10">
						<img
							loading="lazy"
							src="./pricecard.svg"
							alt=""
							className="w-full h-auto"
						/>

						<div className="absolute inset-0 flex flex-col justify-center items-center w-full">
							<h4 className="lg:text-[50px] text-lg font-extrabold uppercase">
								sathish bala, ceo
							</h4>
							<p className="text-xs lg:text-2xl text-center">
								SBALA@DESIFEST.CA
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}


