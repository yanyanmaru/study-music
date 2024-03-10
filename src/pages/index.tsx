import Player from './../components/Player'

export default function Home() {
  return (
    <main className='mt-8 flex justify-center gap-8'>
      <Player file='night.mp3' />
      <Player file='fire.mp3' />
      <Player file='hurin.mp3' />
      <Player file='snow.mp3' />
      <Player file='storm.mp3' />
    </main>
  );
}
