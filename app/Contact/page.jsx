import { ContributionCard, EmailBanner, Faq } from "components/Index";

export default function page() {
  return (
    <section style={{ margin: "3rem", gap: "2rem" }}>
      <Faq /> <ContributionCard /> <EmailBanner />
    </section>
  );
}
