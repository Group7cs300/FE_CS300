import {
	Discover,
	LearnEverything,
	Navbar,
	Footer,
	TaughtBy,
	BecomeATutor,
} from '../containers'

export default function HomePage() {
	return (
		<div>
			<Navbar />
			<Discover />
			<LearnEverything />
			<TaughtBy />
			<BecomeATutor />
			<Footer />
		</div>
	)
}
