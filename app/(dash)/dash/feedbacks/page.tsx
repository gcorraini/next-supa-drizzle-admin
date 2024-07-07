import { getFeedbacks } from "@/src/db/queries";
import { Table } from 'reactstrap';

export default async function Page() {
    const feedbacks = await getFeedbacks();
    return (
      <>
        <p>Feedbacks Page</p>
        <hr />
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Created at</th>
              <th>Description</th>
              <th>Competitors</th>
              <th>URL</th>
              <th>IP address</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((item) => (
                <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.created_at}</td>
                    <td>{item.desc}</td>
                    <td>{item.comp_list}</td>
                    <td>{item.url}</td>
                    <td>{item.ip_address}</td>
                </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
}