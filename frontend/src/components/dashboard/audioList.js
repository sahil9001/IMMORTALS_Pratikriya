import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import callsList from './data';
const AudioList = (props) => {
	return (
		<React.Fragment>
			<div sx={{marginLeft: '100px'}}>
			<Row>
				<Col md={6} xl={8}>
					<Card className="RecentUsers">
						<Card.Header>
							<Card.Title as="h5">Recent Users</Card.Title>
						</Card.Header>
						<Card.Body className="px-0 py-2">
							<Table responsive hover>
								<tbody>
									{callsList.map(function (object) {
										return (<tr key={object.id} className="unread" onClick={() => props.setCaller(object)}>
											<td style={{verticalAlign:'middle'}}>
												<img className="rounded-circle" style={{ width: '40px' }} src={`${object.imageIcon}`} alt="activity-user" />
											</td>
											<td style={{verticalAlign:'middle'}}>
												<h6 className="mb-1">{object.fullName}</h6>
												<p className="m-0">{object.location}</p>
											</td>
											<td style={{verticalAlign:'middle'}}>
												<h6 className="text-muted">
													<i className="fa fa-circle text-c-green f-10 m-r-15" />
													{object.timeStamp}
												</h6>
											</td>
											<td style={{verticalAlign:'middle'}}>
												<a className="label theme-bg2 text-white f-12" style={{cursor:'pointer', borderRadius: '15px',  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)'}}>
													Prediction Here
												</a>
											</td>
										</tr>);
									})}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row >
			</div>
		</React.Fragment>
	);
}

export default AudioList;

// const styles = {
// 	RecentUsers: {
//     table: {
//         tr: {
//             '&:first-child': {
//                 td: {
//                     borderTop: 0
//                 }
//             }
//         },

//         td:{
//             verticalAlign: 'middle'
//         },

//         label: {
//             borderRadius: '15px',
//             boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)',
//         },
//     }
// }
// };