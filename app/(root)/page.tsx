import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { title } from "process";

export default async function Home({searchParams}: 
  {searchParams:Promise <{query?:string}>}) {
    const query = (await searchParams).query;

    const posts = [{
      _createdAt: new Date(),
      Views: 55,
      author: {_id:1},
      _id: 1,
      description: 'This is a description',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fearth-water-drop.html&psig=AOvVaw2Z-ORPRnDJ97icexFNNGJU&ust=1731512976896000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjCh9qS14kDFQAAAAAdAAAAABAE',
      category: 'Robots',
      title: "We Robots"
    }];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup <br /> Connect With Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit IdeasVote on Pitches and Get Noticed in Virtual Competitions 
        </p>

        <SearchForm query={query} />
      </section>
          <section className="section_container">
              <p className="text-30-semibold">
                  {query ? `Search results for "${query}"` : "All Startups"}
              </p>

              <ul className="mt- card-grid">
             {posts?.length > 0 ? (
              posts.map((post: StartupCardType) =>(
                <StartupCard key={post?._id} post={post} />
              ))
             ) : (
              <p className="no-results">No startups found</p>
             )}
              </ul>
          </section>
    </>
  );
}


