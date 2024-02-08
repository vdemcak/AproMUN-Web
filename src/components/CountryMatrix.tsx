import { useEffect, useState } from 'react';
import { Notice } from './Notice';

interface MatrixResponse {
  id: number;
  created_at: string;
  updated_at: string;
  alpha2: string;
  committee_memberships: Committeemembership[];
  name: string;
  slug: string;
  spots: number;
  assignable_spots: number;
  internally_assignable_spots: number;
}

interface Committeemembership {
  id: number;
  committee: Committee;
  size: number;
  slots_assignable: number;
  is_full: boolean;
}

interface Committee {
  id: number;
  me_can_view: boolean;
  name: string;
  slug: string;
  topic_1: string;
  topic_2?: any;
  topic_3?: any;
  difficulty: number;
  image: string;
  delegate_capacity: number;
  offers_length: number;
}

const CountryMatrix = () => {
  const [matrixCountries, setMatrixCountries] = useState<MatrixResponse[]>();
  const [matrixCommittees, setMatrixCommittees] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://mymun.com/api/conferences/4088/committee-members?include_memberships=true')
      .then((res) => res.json())
      .then((data: MatrixResponse[]) => {
        const committees: string[] = [];

        data.map((country) => {
          country.committee_memberships.map((committee) => {
            committees.includes(committee.committee.name) ? null : committees.push(committee.committee.name);
          });
        });

        setMatrixCountries(data);
        setMatrixCommittees(committees);
      });
  }, []);

  return (
    <>
      <div className="mt-12 w-full overflow-x-scroll rounded-lg border">
        <table className="w-full overflow-hidden ">
          <thead className=" bg-primary font-bold text-white">
            <tr>
              <th className="px-5 py-3 text-left">Country</th>
              {matrixCommittees.map((committee) => (
                <th className="px-5 py-3">
                  <span title={committee}>{committee.replaceAll(' ', '').replace(/[a-z]/g, '')}</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y ">
            {matrixCountries?.map((country) => (
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="whitespace-nowrap py-3 pl-5">{country.name}</td>
                {matrixCommittees.map((committee) => (
                  <td className="py-3 text-center">
                    {country.committee_memberships.map(
                      (membership) =>
                        membership.committee.name === committee && (
                          <span
                            title={`${membership.committee.name} position ${
                              membership.is_full ? 'taken' : 'available'
                            }`}>
                            {membership.is_full ? '🔴' : '🟢'}
                          </span>
                        )
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full">
        <Notice text="Table contains live data from MyMun. Hover to see details." />
      </div>
    </>
  );
};

export default CountryMatrix;
