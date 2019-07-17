function check() {
    if (Runner.instance_.horizon.obstacles.length > 0) {
        let dist = (Runner.instance_.horizon.obstacles[0].xPos || 300);
        let obj = Runner.instance_.horizon.obstacles[0];
        let type = obj.typeConfig.type;
        if (dist < 140) {
            if (type === 'PTERODACTYL' && obj.yPos > 100) {
                if(!Runner.instance_.tRex.ducking) Runner.instance_.tRex.setDuck(true);
            } else {
                if(Runner.instance_.tRex.ducking) Runner.instance_.tRex.setDuck(false);
                Runner.instance_.tRex.startJump(Runner.instance_.currentSpeed);
            }
        }
    }
    requestAnimationFrame(check);
}