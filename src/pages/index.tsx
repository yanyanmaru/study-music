import Player from './../components/Player'


export default function Home() {
  return (
    <main className='mt-8 flex justify-center gap-8'>
      <Player file='night.mp3' icon={["fas", "kiwi-bird"]} />
      <Player file='fire.mp3' icon={["fas", "fire"]} />
      <Player file='hurin.mp3' icon={["far", "bell"]} />
      <Player file='snow.mp3' icon={["fas", "poo-storm"]} />
      <Player file='storm.mp3' icon={["fas", "umbrella"]} />
    </main>
  );
}
