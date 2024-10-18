import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="post-preview">
      <h3>{post.frontmatter.title}</h3>
      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <p>{post.frontmatter.excerpt}</p>

      <div className="read-more">
        <Link href={`/blog/${post.slug}`}>
          <a className="btn">CONTINUE -&gt;</a>
        </Link>
      </div>
    </div>
  );
}
