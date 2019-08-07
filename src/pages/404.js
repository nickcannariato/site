import React, { useState, useLayoutEffect } from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

// Images
import Astronaut from '../images/404/Astronaut-big.png'
import BalloonLost from '../images/404/Balloon Lost-big.png'
import BrokenClock from '../images/404/Broken Clock-big.png'
import Ostrich from '../images/404/Ostrich-big.png'
import CautionTape from '../images/404/Caution Tape-big.png'
import BrokenMug from '../images/404/Broken Mug-big.png'
import BurntToast from '../images/404/Burnt Toast-big.png'
import DogAte from '../images/404/Dog Ate-big.png'
import SpilledMilk from '../images/404/Spilled Milk-big.png'
import ShoesTied from '../images/404/Shoes Tied-big.png'
import KidsToy from '../images/404/Kid_s Toy-big.png'
import LostTourist from '../images/404/Lost Tourist-big.png'
import BoatLeak from '../images/404/Boat Leak-big.png'
import Ghost from '../images/404/Ghost-big.png'
import PizzaBox from '../images/404/Pizza Box-big.png'
import LostKeys from '../images/404/Lost Keys-big.png'
import Trash from '../images/404/Trash-big.png'
import LochNess from '../images/404/Loch Ness-big.png'
import IceCreamSpill from '../images/404/Ice Cream Spill-big.png'

const fourOhFourHeadingText = [
  "This Page is Lost in Space",
  "This Page is Lost in the Wind",
  "This Page is Burried in the Sand",
  "This Page is Broken",
  "Caution! This Page is Cordoned Off",
  "This Page is Broken",
  "This Page is Burnt to a Crisp",
  "A Dog Ate this Page",
  "Don't Cry Over Spilled Page",
  "Oh No! We Tripped Up!",
  "This Page is Wrong",
  "This Page is Not on the Map",
  "There's a Leak in the Website",
  "This Page is a Ghost",
  "This Page Contains Nothing but Scraps",
  "This Page is Lost",
  "This Page is in the Garbage",
  "This Page is Not Real",
  "This Page is Melted in the Sun"
]

const fourOhFourParagraphText = [
  "You thought this mission to the moon would be a quick six month thing. Your neighbor offered to look after your dog. Your high school math teacher was impressed. He once said you wouldn't amount to anything. You sure showed him. But now here you are, fifty feet from your spaceship with no way to get back. Your dog will be so sad. Your math teacher will be so smug. Pretty devastating.",
  "The child had looked so excited when the clown had presented a large red balloon. You had seen this, but in the throes of your morning commute you didn't register it until it was too late. Who asked the government to support a fair in the middle of Main Street during a week day anyway? Your bike barrelled right between the child and the clown and sent the balloon on its merry way. You didn't turn back to see the damage you had done. Later you saw the balloon floating outside your office window.",
  "You have never seen an ostrich head. Whenever you're around it seems ostriches are avoiding your gaze. You came on this trip specifically to see an ostrich head, but here is this ostrich right in front of you, head invisible. You may never see an ostrich head.",
  "A broken clock is right twice a day. But if you just have one clock, it's impossible to tell exactly when the clock is right. So it could be right at any moment. And that brings you to the crux of the conceptualization. What is time? Nothing but an abyss. Clocks are just false attempts to harness its power. It's a cruel reality.",
  "The earthquake was not good to the bike lane on your way to work. A large gap in the pavement (too big to be called a pothole) had swallowed three oblivious bikers whole. So the city had put up two pylons and yellow caution tape. Pretty frustrating for you given your propensity to do 360 jumps over the gap.",
  "This mug was a family heirloom. Of your neighbor. Your neighbor always loved the color, shape, and quantity of coffee held by this mug. But your neighbor moved out and left it on their porch, no explanation, no repair materials, no nothing. So now you have this broken mug.",
  "Toast takes so long to make. You stare at the toaster tapping your feet. Your laundry is in the dryer and it just dingerd. Maybe you'll take it out. After all, you have time. You take out your laundry. You fold your underwear. You think about folding your socks. You remember your toast! It's too late. It's burnt to a crisp. The process repeats itself. You should probably figure out your toasting settings.",
  "Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation certificate? Where is the chocolate cake I baked for my Aunt's birthday? And why did you take your dog to the vet on that same Thursday?!",
  "Gulp. You hold back tears as the white liquid spreads across the floor from your sad looking carton. You should have bought the chocolate milk. It was clearly the better choice. And then maybe you wouldn't have so carelessly smacked it across the room when you emphatically pointed at a bird outside. Too late now. You wipe the single tear from your eye and go fetch the mop.",
  "You had been told you should always check your shoes before getting up from the bleachers. Freshman were known to walk under them and tie peoples’ shoes together.",
  "You have been trying for ten minutes. It’s pretty late at night and pretty dark in your room. You reach over and flick on a lamp. You feel oh so stupid. The gap in the toy is a triangle and you only have the cylinder and cube pieces. In dismay you toss the toy aside. Curse your five year old’s inability to keep track of the triangle!",
  "You told your friends you weren’t bringing your phone, to try and experience what travel was like back in the day. You bought a map and a bottle of water and carried your camera for the money shot. But the map was from 2005 and the landscape had changed. So here you are, in the middle of a large field, that the map continues to claim is a local grocer.",
  "The boat had looked good to the naked eye. But you wear a very strong prescription and should have been wearing glasses. As you cling on to the bouey the coast guard had thrown at you, you watch the water rush into you beloved dingy. The leak sprays water higher and higher. Then the boat was swallowed and sunk into the abyss.",
  "Once alive and now dead, this ghost appears to have some unfinished business. Could it be with you? Or the treasure hidden under the floorboards of the old mansion in the hills that may never reach its rightful owner, a compassionate school teacher in Brooklyn.",
  "A perfectly enticing pizza box sitting on a table. You open it filled with anticipation. And find… nothing but scraps. Perhaps a half eaten crust. And a lot of grease. The anticipation turns to deep disappointment and despair. There’s nothing left!",
  "You bought a little bracelet for the express purpose of not losing your keys. You put a hook on your door specifically meant for keeping your keys. You briefly attempted to attach your keys to your phone. But here they are. In the dirt. In the park across the street from that bar you used to like but decided the last time you went that you probably wouldn’t go again. You’ll never find them.",
  "When the king of racoons approached you during the fall of 2005, you were taken aback by the generosity of the offer he made and also his ability to talk. You’ve been living in harmony ever since. They pay 50% of your rent and you “forget” to take out the garbage every other week.",
  "The imposing figure with the trenchcoat shows you the two polaroids. One appears to show the Loch Ness monster herself in the middle of a stretch of dark water. The other shows a sasquatch picking it’s way through a dark forest. You look closer. The animal shapes are drawn on with ink. “This isn’t real!” You scream and throw the polaroids to the floor, sobbing.",
  "People questioned your desire to get strawberry. “That’s the worst flavor,” they said. But you are strong and independent so you got it anyway. And honestly, it wasn’t great. Luckily, two licks in a bike whizzed past you and knocked the cone out of your hand. “Oh no!” you yelled as the creamy pink became a mess in the dirt. But really you were happy."
]

const fourOhFourImgSrc = [
  Astronaut,
  BalloonLost,
  Ostrich,
  BrokenClock,
  CautionTape,
  BrokenMug,
  BurntToast,
  DogAte,
  SpilledMilk,
  ShoesTied,
  KidsToy,
  LostTourist,
  BoatLeak,
  Ghost,
  PizzaBox,
  LostKeys,
  Trash,
  LochNess,
  IceCreamSpill
]

export default () => {
  const [ pick, updatePick ] = useState(0)

  useLayoutEffect(() => {
    const newPick = Math.floor(Math.random()*fourOhFourHeadingText.length)
    updatePick(newPick)
  })

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          src={fourOhFourImgSrc[pick]}
          className="block mx-auto w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          {fourOhFourHeadingText[pick]}
        </h2>
        <p className="font-sans text-lg subpixel-antialiased font-thin">
          {fourOhFourParagraphText[pick]}
        </p>
      </div>
    </Layout>
  );
}
