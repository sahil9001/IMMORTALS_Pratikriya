import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import callsList from './data';
const AudioList = () => {
	return (
		<React.Fragment>
			<Row>
				<Col md={6} xl={8}>
					<Card className="Recent-Users">
						<Card.Header>
							<Card.Title as="h5">Recent Users</Card.Title>
						</Card.Header>
						<Card.Body className="px-0 py-2">
							<Table responsive hover>
								<tbody>
									{callsList.map(function (object, i) {
										return (<tr className="unread">
											<td>
												<img className="rounded-circle" style={{ width: '40px' }} src={`${object.imageIcon}`} alt="activity-user" />
											</td>
											<td>
												<h6 className="mb-1">{object.fullName}</h6>
												<p className="m-0">{object.location}</p>
											</td>
											<td>
												<h6 className="text-muted">
													<i className="fa fa-circle text-c-green f-10 m-r-15" />
													{object.timeStamp}
												</h6>
											</td>
											<td>
												<a to="#" className="label theme-bg2 text-white f-12">
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
		</React.Fragment>
	);
}

export default AudioList;

// const styles = {
// 	.Recent-Users,
// .User-Lists {
//     .table {
//         tr {
//             &:first-child {
//                 td {
//                     border-top: 0;
//                 }
//             }
//         }

//         td {
//             vertical-align: middle;
//         }

//         .label {
//             border-radius: 15px;
//             box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
//         }
//     }
// }
// };