import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CaniDesignsApp() {
  const [stories, setStories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const addStory = () => {
    if (!title || !content) return;
    setStories([...stories, { title, content, image }]);
    setTitle("");
    setContent("");
    setImage("");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cani Designs ✨</h1>

      <Card className="mb-6">
        <CardContent className="p-4 space-y-3">
          <h2 className="text-xl font-semibold">Create Your Story</h2>
          <Input
            placeholder="Story Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Write your story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Input
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Button onClick={addStory}>Add Story</Button>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {stories.map((story, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">{story.title}</h3>
              {story.image && (
                <img
                  src={story.image}
                  alt="story"
                  className="w-full h-48 object-cover rounded-xl my-2"
                />
              )}
              <p>{story.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}