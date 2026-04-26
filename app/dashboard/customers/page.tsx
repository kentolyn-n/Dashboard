import { Metadata } from 'next';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function customersPage() {
    const customers = await fetchCustomers();
    return(
        <div>
      <h1 className="text-xl font-bold mb-4">Customers</h1>

      <table className="w-full border">
        <thead>
          <tr className="text-left border-b">
            <th className='p-2'>Profile</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b">
              <td className="p-2">
                <img
                  src={customer.image_url}
                  alt={customer.name}
                  className="rounded-full"
                  width={32}
                  height={32}
                />
              </td>
              <td className="p-2">{customer.name}</td>
              <td className="p-2">{customer.email}</td>
               </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}