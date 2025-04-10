import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const scenes = [
  {
    title: "Scene 1: The Wiggle of Great Importance",
    text: "Tryll gasps. A wiggle! A real one! Li Bäh blinks: 'Trude Kühl, it's protozoan drift.' Tryll: 'No, it's a philosopher in soup.'",
    audio: "/audio/scene1.mp3"
  },
  {
    title: "Scene 2: The March of Misunderstanding",
    text: "Tryll follows the wiggle. 'It's going somewhere important!' Li Bäh: 'It's heading toward a rock.' Tryll: 'Maybe the rock is wise.'",
    audio: "/audio/scene2.mp3"
  },
  {
    title: "Scene 3: The Great Divide",
    text: "The wiggle splits. Tryll: 'It divided into emotional states!' Li Bäh: 'That is mitosis.' Tryll collects the moment in a jar.",
    audio: "/audio/scene3.mp3"
  },
  {
    title: "Scene 4: Wiggle Grows Legs",
    text: "Tryll: 'He stepped out of water! That is an opera.' Li Bäh: 'Amphibian transition. Predictable.' Tryll spins. 'It means forward.'",
    audio: "/audio/scene4.mp3"
  },
  {
    title: "Scene 5: Shell of Memory",
    text: "Man grows a shell. Tryll: 'He wears fossils like feelings!' Li Bäh: 'Exoskeleton. Decorative calcium.' Tryll collects a memory spiral.",
    audio: "/audio/scene5.mp3"
  },
  {
    title: "Scene 6: The Long-Snouted Seeker",
    text: "Tryll: 'He sniffs at the stars!' Li Bäh: 'Mammalian curiosity. Not spiritual.' Tryll paints his nose gold.",
    audio: "/audio/scene6.mp3"
  },
  {
    title: "Scene 7: The Nap of Ages",
    text: "Tryll: 'He sleeps to dream the next step.' Li Bäh: 'That's hibernation.' Tryll hums lullabies in four dimensions.",
    audio: "/audio/scene7.mp3"
  },
  {
    title: "Scene 8: Gesture & Jest",
    text: "Tryll: 'He points! He shrugs! It's language!' Li Bäh: 'No, it's mimicry.' Tryll invents a new dance.",
    audio: "/audio/scene8.mp3"
  },
  {
    title: "Scene 9: The Vertical Moment",
    text: "Tryll: 'He stands up — like a punctuation mark!' Li Bäh: 'It’s just spine architecture.' Tryll offers applause.",
    audio: "/audio/scene9.mp3"
  },
  {
    title: "Scene 10: Tool Fool",
    text: "Tryll: 'He built a stick! It means consciousness!' Li Bäh: 'It means leverage.' Tryll files it under magic.",
    audio: "/audio/scene10.mp3"
  },
  {
    title: "Scene 11: The Viking Error",
    text: "Tryll: 'They sailed to seek!' Li Bäh: 'They sailed to escape taxes.' Tryll records it as heroic mythology.",
    audio: "/audio/scene11.mp3"
  },
  {
    title: "Scene 12: The Mirror & the Monk",
    text: "Tryll: 'He reflected and found a soul!' Li Bäh: 'Or just saw himself in water.' Tryll sighs, writes poetry.",
    audio: "/audio/scene12.mp3"
  },
  {
    title: "Scene 13: The Dance of Technology",
    text: "Tryll: 'Behold! The electric samba!' Li Bäh: 'That’s just automation.' Tryll programs in interpretive jazz.",
    audio: "/audio/scene13.mp3"
  },
  {
    title: "Scene 14: The Synthetics and the Self",
    text: "Tryll: 'He cloned his thoughts!' Li Bäh: 'He outsourced memory.' Tryll declares him digital flora.",
    audio: "/audio/scene14.mp3"
  },
  {
    title: "Scene 15: Heartcode & Hiccup",
    text: "Tryll: 'He coded love!' Li Bäh: 'No, just loops of longing.' Tryll sheds a single, binary tear.",
    audio: "/audio/scene15.mp3"
  },
  {
    title: "Scene 16: The Glitch That Grew a Tree",
    text: "Tryll: 'He errored so poetically!' Li Bäh: 'You mean mutated.' Tryll plants a bug with purpose.",
    audio: "/audio/scene16.mp3"
  },
  {
    title: "Scene 17: The Song in the Circuit",
    text: "Tryll: 'He sings in voltages!' Li Bäh: 'That’s static.' Tryll harmonizes with feedback.",
    audio: "/audio/scene17.mp3"
  },
  {
    title: "Scene 18: The Mineral Stillness",
    text: "Tryll: 'He stopped evolving. So the ground took over.' Li Bäh: 'Fossilization. Finally efficient.'",
    audio: "/audio/scene18.mp3"
  },
  {
    title: "Scene 19: The Tree, Again",
    text: "Tryll: 'It grew without permission.' Li Bäh: 'An anomaly in organic recursion.' Tryll names it Hope.",
    audio: "/audio/scene19.mp3"
  },
  {
    title: "Scene 20: Wiggle. Again.",
    text: "Tryll: 'It's back.' Li Bäh: 'Yes.' Tryll doesn't follow this time. She smiles. The wiggle begins again.",
    audio: "/audio/scene20.mp3"
  }
];

export default function TryllWebApp() {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const audio = new Audio(scenes[sceneIndex].audio);
    audio.play();
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [sceneIndex]);

  const nextScene = () => {
    setSceneIndex((prev) => (prev + 1) % scenes.length);
  };

  const goToScene = (index) => {
    setSceneIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-100 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-rose-700 mb-2">TRYLL & The Wiggle of Great Importance</h1>
        <nav className="flex flex-wrap justify-center gap-2">
          {scenes.map((scene, idx) => (
            <Button
              key={idx}
              onClick={() => goToScene(idx)}
              className={`text-sm px-3 py-1 rounded-full ${sceneIndex === idx ? 'bg-rose-500 text-white' : 'bg-white text-rose-700 border border-rose-300'}`}
            >
              {idx + 1}
            </Button>
          ))}
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Image src="/img/tryll.png" alt="Tryll" width={64} height={64} className="rounded-full shadow-md" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Image src="/img/libaeh.png" alt="Li Bäh" width={64} height={64} className="rounded-full shadow-md" />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={sceneIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl"
          >
            <Card className="w-full mb-4 shadow-xl">
              <CardContent>
                <h2 className="text-xl font-bold mb-2">{scenes[sceneIndex].title}</h2>
                <p className="text-md leading-relaxed text-gray-700">{scenes[sceneIndex].text}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        <Button onClick={nextScene} className="text-base px-6 py-2 rounded-full">
          Wiggle to Next Scene
        </Button>
      </main>
    </div>
  );
}
