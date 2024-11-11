import SearchForm from "@/app/components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup <br /> Connect With Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit IdeasVote on Pitches and Get Noticed in Virtual Competitions 
        </p>

        <SearchForm />
      </section>
     
    </>
  );
}


