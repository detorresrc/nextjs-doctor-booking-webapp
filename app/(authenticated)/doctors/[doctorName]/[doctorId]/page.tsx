import { Container } from "@/components/container";
import { DoctorDetailsClient } from "./_components/client";

interface Props {
  params: Promise<{
    doctorName: string;
    doctorId: string;
  }>;
}

const DoctorDetailsPage = async ({ params }: Props) => {
  const { doctorId } = await params;

  return (
    <Container>
      <DoctorDetailsClient doctorId={doctorId} />
    </Container>
  );
};

export default DoctorDetailsPage;
