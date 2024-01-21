// Import necessary modules and types
import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye } from "lucide-react";

export default function ProjectsPage() {
  // Retrieve the featured, top2, and top3 projects
  const featured = allProjects.find((project) => project.slug === "kasir-foodcourt")!;
  const top2 = allProjects.find((project) => project.slug === "voting")!;
  const top3 = allProjects.find((project) => project.slug === "desa-cantik")!;
  const onlineVoting = allProjects.find((project) => project.slug === "web-vote")!;

  // Sort the remaining projects
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug &&
        project.slug !== onlineVoting.slug, // Exclude Web Vote from sorting
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work, and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {/* Featured project */}
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      0 // Replace with actual views data
                    )}
                  </span>
                </div>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="static bottom-6 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          {/* Top 2 and Top 3 projects */}
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((project) => (
              project && (
                <Card key={project.slug}>
                  <Link href={`/projects/${project.slug}`}>
                    <article className="relative w-full h-full p-4 md:p-8">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs text-zinc-100">
                          {project.date ? (
                            <time dateTime={new Date(project.date).toISOString()}>
                              {Intl.DateTimeFormat(undefined, {
                                dateStyle: "medium",
                              }).format(new Date(project.date))}
                            </time>
                          ) : (
                            <span>SOON</span>
                          )}
                        </div>
                        <span className="flex items-center gap-1 text-xs text-zinc-500">
                          <Eye className="w-4 h-4" />{" "}
                          {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                            0 // Replace with actual views data
                          )}
                        </span>
                      </div>
                      <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                        {project.title}
                      </h2>
                      <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                        {project.description}
                      </p>
                      <div className="static bottom-4 md:bottom-8">
                        <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                          Read more <span aria-hidden="true">&rarr;</span>
                        </p>
                      </div>
                    </article>
                  </Link>
                </Card>
              )
            ))}
          </div>
        </div>

        {/* Display Web Vote project and other projects in a grid */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {[onlineVoting, ...sorted].map((project) => (
            project && (
              <Card key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <article className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        {project.date ? (
                          <time dateTime={new Date(project.date).toISOString()}>
                            {Intl.DateTimeFormat(undefined, {
                              dateStyle: "medium",
                            }).format(new Date(project.date))}
                          </time>
                        ) : (
                          <span>SOON</span>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <Eye className="w-4 h-4" />{" "}
                        {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                          0 // Replace with actual views data
                        )}
                      </span>
                    </div>
                    <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                      {project.title}
                    </h2>
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {project.description}
                    </p>
                    <div className="static bottom-4 md:bottom-8">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div>
                  </article>
                </Link>
              </Card>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
