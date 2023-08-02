import { Controller } from '@nestjs/common';
import { get } from 'http';

@Controller('ninjas')
export class NinjasController {
    // GET /ninjas-->[]
    @get()
    getNinjas(){
        return[];
    }

    //GET /ninjas/:id-->{}
    @get(':id')
    getOneNinja() {
        return {};
    }
    //POST /ninjas
    //PUT /ninjas/:id--{...}
    //DELETE /ninjas/:id
}
