import { getFeedbacks } from "@/src/db/queries";
import { Table } from 'reactstrap';

export default async function Page() {
    const feedbacks = await getFeedbacks();
    return (
      <>
        <h2 className="pb-3 mb-4 border-bottom text-start">Feedbacks Page</h2>
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Created at</th>
              <th>Description</th>
              <th>Competitors</th>
              <th>URL</th>
              {/* <th>IP address</th> */}
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((item, key) => (
                <tr key={key}>
                    <th scope="row">{item.id}</th>
                    <td><small>{item.created_at}</small></td>
                    <td className="text-break"><small>{item.desc}</small></td>
                    <td>{item.comp_list.join(", ")}</td>
                    <td>{item.url}</td>
                    {/* <td>{item.ip_address}</td> */}
                </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
}