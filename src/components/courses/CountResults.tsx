import { Container } from "react-bootstrap";

export default function CountResults(props: any): JSX.Element {
	return (
		<Container style={{ padding: 50, paddingBottom: 20 }}>
			<h2>{props.search_text}</h2>
			<h5 className="text-muted">{props.count} Results</h5>
		</Container>
	)
}
