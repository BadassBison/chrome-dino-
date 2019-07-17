function dinoAI() {
    if (Runner.instance_.horizon.obstacles.length > 0) {
        let dist = Runner.instance_.horizon.obstacles[0].xPos;
        let obj = Runner.instance_.horizon.obstacles[0];
        let type = obj.typeConfig.type;
        let speed = Runner.instance_.currentSpeed;
        if (dist < speed * 22) {
            if (type === 'PTERODACTYL' && obj.yPos < 60) {
                if(!Runner.instance_.tRex.ducking) Runner.instance_.tRex.setDuck(true);
            } else {
                if(Runner.instance_.tRex.ducking) Runner.instance_.tRex.setDuck(false);
                Runner.instance_.tRex.startJump(Runner.instance_.currentSpeed);
            }
        }
    }
    requestAnimationFrame(dinoAI);
}
dinoAI();