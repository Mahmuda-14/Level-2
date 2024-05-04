{

    // union types
    type FrontendDeveloper ='fakibaj' | 'junior'

    const newDev : FrontendDeveloper ='junior'

    type User ={
        name: string;
        email?: string;
        gender : 'male' | 'female';
        blood : 'O+' | 'A+' | 'AB+'
    }

    const user1: User ={
        name: 'mahmuda',
        gender : 'female',
        blood : 'AB+',
    }

  // Intersection 

  type frontDev ={
    skill: string[];
    designation1 : 'frontend'
  }
  type backDev ={
    skill: string[];
    designation2 : 'backend'
  }

  type Fullstack = frontDev & backDev

  const full : Fullstack ={
    skill:['html','css'],
    designation1:'frontend',
    designation2:'backend'
  }
}