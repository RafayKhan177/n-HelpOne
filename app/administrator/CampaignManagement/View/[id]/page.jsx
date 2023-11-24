"use client";

import { getDocById } from "app/api/firebase/functions/get";
import { EditCampaign } from "../../../../../components/Index";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { updateDoc } from "app/api/firebase/functions/post";

export default function Page() {
  const [campaign, setCampaign] = useState();
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const handleSave = (data) => {
    updateDoc("campaigns", id, data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getDocById(id, "campaigns");
        setCampaign(res);
      } catch (error) {
        console.error("Something went wrong:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <section>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <EditCampaign handleSave={handleSave} campaignData={campaign} />
      )}
    </section>
  );
}
