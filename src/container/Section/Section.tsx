import { Button, Col, Container, Row } from 'react-bootstrap'
export default function BecomeATutor() {
	return (
        <>
        <style type="text/css">
            {`
                .btn-primary{
                    font-size: '16';
                    background-color: #ffffff;
                    color: #000000;
                    border-color: #ffffff;
                    padding-top: 20px;
                    padding-bottom: 20px;
                }
                .btn-primary:hover {
                background-color: #002333;
                color: #ffffff;
            }
            `}
        </style>
        <Container>
            <Container
                style={{
                    textAlign: 'center',
                    fontFamily: 'Jacques Francois',
                    fontWeight: 550,
                    fontSize: 24,
                    paddingBottom: '10px',
                }}>
                    <Row>Section in this course</Row>
                    <Row></Row>              
            </Container>

            <Container
                style={{
                    height: '275px',
                    width:'900px',
                    overflow: 'scroll'    
                }}>
                
                <Row>
                    <Button variant='primary'>
                        Section 1: Name section
                    </Button>
                </Row>
                <Row>
                    <Button className='btn-primary'>
                        Section 2: Name section
                    </Button>
                </Row>
                <Row>
                    <Button variant="primary">
                    Section 3: Name section
                    </Button>
                </Row>
                <Row>
                    <Button className='btn-primary'>
                    Section 4: Name section
                    </Button>
                </Row>
                <Row>
                    <Button className='btn-primary'>
                    Section 5: Name section
                    </Button>
                </Row>
                <Row>
                    <Button className='btn-primary'>
                    Section 6: Name section
                    </Button>
                </Row>
                <Row>
                    <Button className="btn-primary">        
                    Section 7: Name section
                    </Button>
                </Row>
            </Container>
        </Container>
        </>
	)
}