import { Col, Container, Row } from 'react-bootstrap'
import Button from "../button/Button";
import Image from 'react-bootstrap/Image'
import Star from '../Star/star'
import Section from '../Section/Section'
import CoursesCard from '../../components/courses_group/CourseCard'

export default function CourseDescription() {
	return (
		<Container fluid style={{ padding: 0 }}>
		<Container fluid style={{ padding: 0 }} >
/*data*/				<Image style={{width: "100%", opacity: "0.6", height:"600px"}} src="/home/python.png" />
		</Container>
		<Container>
			<Row>
				<Col
					style={{
						display: 'flex',
						alignItems: 'left',
						flexDirection: 'column',
						justifyContent: 'center',
						
					}}
				>
					
					<h2
						style={{
							textAlign: 'left',
							paddingTop: '40px',
							fontFamily: 'Arial Black',
							fontStyle: 'extra bold',
							fontWeight: 3000,
							fontSize: 32,
							textShadow: '0px 2px 4px grey',
							color: '#002333'
						}}
					>
/*data*/						Python for Beginner: Learn the Python programming language and the fundamentals of Python
					</h2>
				</Col>
			</Row>
			<Row>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						
					}}
				>
					
					<h2
						style={{
							textAlign: 'center',

							fontFamily: 'Jacques Francois',
							fontStyle: 'bold',
							fontWeight: 550,
							fontSize: 16,
						}}
					>
/*data*/						Categories:
					</h2>
				</Col>
				<Col
					style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					justifyContent: 'center',
					
				}}>
					<Button 
						border="none"
						backgroundColor="#002333"
						color="#FFFFFF"
						fontSize="16px"
						height = "30px"
						onClick={() => console.log("Button!")}
						radius = "30px"
						width = "250px"
/*data*/						children = "Information Technology"
					/>	
				</Col>
				<Col
					style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					justifyContent: 'center',
					
				}}>
					<Button 
						border="none"
						backgroundColor="#002333"
						color="#FFFFFF"
						fontSize="16px"
						background-color="#none"
						height = "30px"
						onClick={() => console.log("Button")}
						radius = "30px"
						width = "250px"
/*data*/						children = "Algorithms"
					/>
				</Col>
				<Col></Col>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',}}>
/*data*/						Rating &nbsp;
					<Star/>
				</Col>
			</Row>

			<Row>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						padding: 30
					}}
				>
					
					<h2
						style={{
							textAlign: 'center',

							fontFamily: 'Jacques Francois',
							fontStyle: 'normal',
							fontWeight: 550,
							fontSize: 16,
						}}
					>
/*data*/						Shared by: Tutor
					</h2>
				</Col>
				<Col></Col>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						padding: 30
					}}
				>
					
					<h2
						style={{
							textAlign: 'center',

							fontFamily: 'Jacques Francois',
							fontStyle: 'normal',
							fontWeight: 550,
							fontSize: 16,
						}}
					>
/*data*/						Latest Update: date
					</h2>
				</Col>
				<Col></Col>
				<Col></Col>
			</Row>

			<Row>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						padding: 20
					}}
				>
					
					
					<Button 
						border="none"
						backgroundColor="#002333"
						color="#FFFFFF"
						fontSize="24px"
						height = "45px"
						onClick={() => console.log("Button!")}
						radius = "30px"
						width = "166px"
						children = "Buy course"
					/>	
				</Col>
			</Row>
		</Container>
		<Container>
			<Row>
				<Col
					style={{
						display: 'block',
						alignItems: 'left',
						flexDirection: 'column',
						justifyContent: 'left',
						wordWrap: 'break-word',
						padding: 30
					}}
					className="col-sm-9"
				>
					<h2
						style={{
							textAlign: 'left',
							color: '#002333',
							fontFamily: 'Inter',
							fontStyle: '900',
							fontWeight: '900',
							textShadow: '0.5px 0px 0.5px #002333',
							fontSize: 24,
						}}
					>
						About this class
					</h2>
					<h2
						style={{
							textAlign: 'left',
							color: '#000000',
							fontFamily: 'Jacques Francois',
							fontStyle: 'bold',
							fontWeight: '600',
							fontSize: 18,
							paddingTop: '10px',
							paddingBottom: '10px',
						}}
					>
						What you'll learn
					</h2>	
					<h2
						style={{
							textAlign: 'left',
							color: '#000000',
							fontFamily: 'Jacques Francois',
							fontStyle: 'normal',
							fontWeight: '550',
							fontSize: 16,
							wordWrap: 'break-word',
						}}
					>
						
/*data*/						You’ll learn the fundamentals of code using Python. However, unlike most coding courses, this class doesn’t give you an exhaustive list of minutiae; instead, you learn just enough to start using code. The goal is for you to finish the class with (a) a set of nifty tools, (b) the ability to write more nifty tools, and (c) the recognition of code’s value in automating day-to-day functions. You’ll cover the following concepts throughout the course:<br></br>
						<br></br>
						Data types, expressions, variables<br></br>
						Functions<br></br>
						Objects<br></br>
						Control Logic<br></br>
						What You'll Build<br></br><br></br>

						Along the way, you’ll create a set of tools to demonstrate these concepts:<br></br><br></br>

						Email List Reformatter<br></br>
						Temperature Report<br></br>
						Umbrella Recommender<br></br>
						Password Strength Checker<br></br>
						Days Until your Birthday<br></br>
						Secret Messages<br></br>
						<br></br>
						The class is designed for anyone with little to no knowledge of coding. No prerequisite knowledge is required. All you need is a laptop, internet, and an hour of time.
					</h2>
					<Row
							style={{
										display: 'block',
										alignItems: 'left',
										flexDirection: 'column',
										justifyContent: 'left',
										wordWrap: 'break-word',
										color: '#002333',
										paddingTop: 150,
									}}>
						<Section/>
					</Row>
				</Col>
				<Col
				    className="col-sm-3">
						<Row
							style={{	
								fontSize: '24px',
								fontStyle: 'bolder',
								fontWeight: '600',
								paddingLeft: '40px',
								textShadow: '0.5px 0px 0.5px #002333',
						}}>
							Relative courses
						</Row>
						<Row>
/*data*/							<CoursesCard/>
							<CoursesCard/>
							<CoursesCard/>
						</Row>
				</Col>
			</Row>

			
			
		</Container>
		</Container>
	)
}
