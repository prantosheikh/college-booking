import React from "react";
import { useLoaderData } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";
import CollegeCard from "../../components/College/CollegeCard";
import Container from "../../components/Shared/Container/Container";

const College = () => {
  const colleges = useLoaderData();
  return (
    <div>
      <PageHeader
        title="all available college"
        backgroundImage="https://raw.githubusercontent.com/uiaextend/jtutorgo/main/courses-list/breadcrumb-bg-2.jpg"
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 space-y-8 md:space-y-0">
          {colleges.map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default College;